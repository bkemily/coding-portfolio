const request = require("supertest");
const CommunityService = require("../services/community.service");

// Mock the CommunityService methods
jest.mock("../services/community.service", () => ({
  getAllCommunityPostsAndComments: jest.fn(),
  createNewCommunityPost: jest.fn(),
  toggleLikeOnCommunityPost: jest.fn(),
  deleteCommunityPostById: jest.fn(),
  createNewCommunityComment: jest.fn(),
  deleteCommunityCommentById: jest.fn(),
}));

describe("Community Routes", () => {
  let app;

  beforeEach(() => {
    // Require fresh instance so mocks reset at module init
    app = require("../app");
    jest.clearAllMocks();
  });

  // Test for the GET /api/get-posts endpoint
  describe("GET /api/get-posts", () => {
    // Test for successful retrieval of posts
    it("should return 200 and posts array", async () => {
      const mockPosts = [{ id: 1, postContent: "Hello" }];
      CommunityService.getAllCommunityPostsAndComments.mockResolvedValue(
        mockPosts
      );

      const res = await request(app)
        .get("/api/get-posts")
        .query({ latitude: "40", longitude: "-74", radius: "50" })
        .set("Accept", "application/json");

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe("Community Posts retrieved successfully");
      expect(res.body.data).toEqual(mockPosts);
      expect(
        CommunityService.getAllCommunityPostsAndComments
      ).toHaveBeenCalledWith("40", "-74", "50");
    });

    // Test for the use of default radius if not provided
    it("should default radius to 100 if not provided", async () => {
      CommunityService.getAllCommunityPostsAndComments.mockResolvedValue([]);
      await request(app)
        .get("/api/get-posts")
        .query({ latitude: "1", longitude: "2" });
      expect(
        CommunityService.getAllCommunityPostsAndComments
      ).toHaveBeenCalledWith("1", "2", 100);
    });
  });

  // Test for the GET /api/get-posts/:id endpoint
  describe("POST /api/create-post", () => {
    const validPost = {
      userName: "Alice",
      email: "a@a.com",
      latitude: 0,
      longitude: 0,
      postContent: "Test",
    };

    // Test for successful post creation
    it("should return 200 and new post on success", async () => {
      CommunityService.createNewCommunityPost.mockResolvedValue({
        id: 123,
        ...validPost,
      });

      const res = await request(app).post("/api/create-post").send(validPost);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe("Community post created successfully");
      expect(res.body.data).toEqual({ id: 123, ...validPost });
      expect(CommunityService.createNewCommunityPost).toHaveBeenCalledWith(
        validPost
      );
    });

    // Test for missing required fields
    ["userName", "email", "latitude", "longitude", "postContent"].forEach(
      (field) => {
        it(`should return 400 if ${field} is missing`, async () => {
          const bad = { ...validPost };
          delete bad[field];
          const res = await request(app).post("/api/create-post").send(bad);
          expect(res.status).toBe(400);
          expect(res.text).toBe("Missing required fields");
        });
      }
    );
  });

  // Test for the POST /api/toggle-like endpoint
  describe("POST /api/toggle-like", () => {
    const payload = { postId: 5, email: "b@b.com" };

    // Test for successful like toggle
    it("should return 200 and updated post", async () => {
      const updated = { id: 5, likes: ["b@b.com"] };
      CommunityService.toggleLikeOnCommunityPost.mockResolvedValue(updated);

      const res = await request(app).post("/api/toggle-like").send(payload);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe("Community post like toggled successfully");
      expect(res.body.data).toEqual(updated);
      expect(CommunityService.toggleLikeOnCommunityPost).toHaveBeenCalledWith(
        5,
        "b@b.com"
      );
    });

    // Test for missing required fields
    ["postId", "email"].forEach((field) => {
      it(`should return 400 if ${field} is missing`, async () => {
        const bad = { ...payload };
        delete bad[field];
        const res = await request(app).post("/api/toggle-like").send(bad);
        expect(res.status).toBe(400);
        expect(res.text).toBe("Missing required fields");
      });
    });
  });

  // Test for the DELETE /api/delete-post endpoint
  describe("DELETE /api/delete-post", () => {
    const payload = { id: 9 };

    // Test for successful post deletion
    it("should return 200 and deleted post when found", async () => {
      CommunityService.deleteCommunityPostById.mockResolvedValue({
        id: 9,
        postContent: "X",
      });

      const res = await request(app).delete("/api/delete-post").send(payload);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe("Community post deleted successfully");
      expect(res.body.data).toEqual({ id: 9, postContent: "X" });
    });

    // Test for 404 if post not found
    it("should return 404 if post not found", async () => {
      CommunityService.deleteCommunityPostById.mockResolvedValue(null);

      const res = await request(app).delete("/api/delete-post").send(payload);

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toBe("Community Post Not Found");
    });

    // Test for 400 if id is missing
    it("should return 400 if id is missing", async () => {
      const res = await request(app).delete("/api/delete-post").send({});
      expect(res.status).toBe(400);
      expect(res.text).toBe("Missing required fields");
    });
  });

  // Test for the POST /api/create-comment endpoint
  describe("POST /api/create-comment", () => {
    const valid = {
      userName: "Bob",
      email: "b@b.com",
      commentText: "Hi",
      postId: 3,
    };

    // Test for successful comment creation
    it("should return 200 and new comment", async () => {
      CommunityService.createNewCommunityComment.mockResolvedValue({
        id: 7,
        ...valid,
      });

      const res = await request(app).post("/api/create-comment").send(valid);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe("Community comment created successfully");
      expect(res.body.data).toEqual({ id: 7, ...valid });
    });

    // Test for missing required fields
    ["userName", "email", "commentText", "postId"].forEach((field) => {
      it(`should 400 if ${field} missing`, async () => {
        const bad = { ...valid };
        delete bad[field];
        const res = await request(app).post("/api/create-comment").send(bad);
        expect(res.status).toBe(400);
        expect(res.text).toBe("Missing required fields");
      });
    });
  });

  // Test for the DELETE /api/delete-comment endpoint
  describe("DELETE /api/delete-comment", () => {
    const payload = { id: 11 };

    // Test for successful comment deletion
    it("should return 200 and deleted comment", async () => {
      CommunityService.deleteCommunityCommentById.mockResolvedValue({
        id: 11,
        commentText: "Bye",
      });

      const res = await request(app)
        .delete("/api/delete-comment")
        .send(payload);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe("Community comment deleted successfully");
      expect(res.body.data).toEqual({ id: 11, commentText: "Bye" });
    });

    // Test for 404 if comment not found
    it("should return 404 if comment not found", async () => {
      CommunityService.deleteCommunityCommentById.mockResolvedValue(null);

      const res = await request(app)
        .delete("/api/delete-comment")
        .send(payload);

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toBe("Community Post Not Found");
    });

    // Test for 400 if id is missing
    it("should 400 if id missing", async () => {
      const res = await request(app).delete("/api/delete-comment").send({});
      expect(res.status).toBe(400);
      expect(res.text).toBe("Missing required fields");
    });
  });
});
