// tests/community.service.spec.js
const communityDao = require('../daos/community.dao');
const CommunityService = require('../services/community.service');

jest.mock('../daos/community.dao');

// Test suite for the Community Service
describe('CommunityService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Test the logic of recieiving all community posts and comments
  describe('getAllCommunityPostsAndComments', () => {
    it('forwards latitude, longitude, radius to the DAO', async () => {
      const fake = [{ id: 1 }];
      communityDao.getAllCommunityPostsAndComments.mockResolvedValue(fake);

      const result = await CommunityService.getAllCommunityPostsAndComments(10, 20, 50);
      expect(communityDao.getAllCommunityPostsAndComments)
        .toHaveBeenCalledWith(10, 20, 50);
      expect(result).toBe(fake);
    });
  });

  // Test the logic of creating a new community post
  describe('createNewCommunityPost', () => {
    it('creates a post and returns the DAO result', async () => {
      const input = { userName: 'A', postContent: 'X' };
      const created = { id: 99, ...input };
      communityDao.createNewCommunityPost.mockResolvedValue(created);

      const result = await CommunityService.createNewCommunityPost(input);
      expect(communityDao.createNewCommunityPost).toHaveBeenCalledWith(input);
      expect(result).toBe(created);
    });
  });

  // Test the logic of toggling a like on a community post
  describe('toggleLikeOnCommunityPost', () => {
    const postId = 5;
    const email = 'u@example.com';

    // Test the logic of causing an error if the post does not exist
    it('throws if the post does not exist', async () => {
      communityDao.getCommunityPostById.mockResolvedValue(null);
      await expect(
        CommunityService.toggleLikeOnCommunityPost(postId, email)
      ).rejects.toThrow('Post not found');
      expect(communityDao.getCommunityPostById).toHaveBeenCalledWith(postId);
    });

    // Test the logic of removing a like if the user already liked
    it('removes a like if the user already liked', async () => {
      const existing = {
        id: postId,
        likeCount: 2,
        usersLiked: ['u@example.com', 'other@x.com']
      };
      communityDao.getCommunityPostById.mockResolvedValue(existing);
      communityDao.updatedPostLikeCount.mockResolvedValue({
        ...existing,
        likeCount: 1,
        usersLiked: ['other@x.com']
      });

      const result = await CommunityService.toggleLikeOnCommunityPost(postId, email);

      expect(communityDao.updatedPostLikeCount).toHaveBeenCalledWith(
        postId,
        1,
        ['other@x.com']
      );
      expect(result.likeCount).toBe(1);
      expect(result.usersLiked).toEqual(['other@x.com']);
    });

    // Test the logic of adding a like if the user has not liked
    it('adds a like if the user has not liked', async () => {
      const existing = {
        id: postId,
        likeCount: 0,
        usersLiked: []
      };
      communityDao.getCommunityPostById.mockResolvedValue(existing);
      communityDao.updatedPostLikeCount.mockResolvedValue({
        ...existing,
        likeCount: 1,
        usersLiked: [email]
      });

      const result = await CommunityService.toggleLikeOnCommunityPost(postId, email);

      expect(communityDao.updatedPostLikeCount).toHaveBeenCalledWith(
        postId,
        1,
        [email]
      );
      expect(result.likeCount).toBe(1);
      expect(result.usersLiked).toEqual([email]);
    });
  });

  // Test the logic of deleting a community post by ID
  describe('deleteCommunityPostById', () => {
    it('forwards the id and returns the DAO result', async () => {
      const payload = { id: 123 };
      const deleted = { id: 123, postContent: 'gone' };
      communityDao.deleteCommunityPostById.mockResolvedValue(deleted);

      const result = await CommunityService.deleteCommunityPostById(payload);
      expect(communityDao.deleteCommunityPostById).toHaveBeenCalledWith(123);
      expect(result).toBe(deleted);
    });
  });

  // Test the logic of creating a new community comment
  describe('createNewCommunityComment', () => {
    it('forwards the comment object and returns DAO result', async () => {
      const comment = { userName: 'C', commentText: 'Hi', postId: 7 };
      const created = { id: 42, ...comment };
      communityDao.createNewCommunityComment.mockResolvedValue(created);

      const result = await CommunityService.createNewCommunityComment(comment);
      expect(communityDao.createNewCommunityComment).toHaveBeenCalledWith(comment);
      expect(result).toBe(created);
    });
  });

  // Test the logic of deleting a community comment by ID
  describe('deleteCommunityCommentById', () => {
    it('forwards the id and returns the DAO result', async () => {
      const payload = { id: 88 };
      const deleted = { id: 88, commentText: 'bye' };
      communityDao.deleteCommunityCommentById.mockResolvedValue(deleted);

      const result = await CommunityService.deleteCommunityCommentById(payload);
      expect(communityDao.deleteCommunityCommentById).toHaveBeenCalledWith(88);
      expect(result).toBe(deleted);
    });
  });
});
