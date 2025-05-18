import React, { useState, useEffect } from "react";
import "../css/FishCaptcha.css";

function FishCaptcha({ onComplete, onUnsolve }) {
    const gridSize = 3; // 3x3 grid
    const pieceSize = 100; // Size of each piece in pixels
    const [pieces, setPieces] = useState(
        Array.from({ length: gridSize * gridSize }, (_, index) => ({
            id: index,
            rotation: Math.floor(Math.random() * 4) * 90, // Random rotation
        }))
    );

    useEffect(() => {
        const isComplete = pieces.every((piece) => piece.rotation === 0);
        if (isComplete) {
            onComplete();
        } else {
            onUnsolve(); // Notify parent when CAPTCHA is unsolved
        }
    }, [pieces, onComplete, onUnsolve]);

    const rotatePiece = (id) => {
        setPieces((prevPieces) =>
            prevPieces.map((piece) =>
                piece.id === id
                    ? { ...piece, rotation: (piece.rotation + 90) % 360 }
                    : piece
            )
        );
    };

    return (
        <div
            className="fish-captcha"
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${gridSize}, ${pieceSize}px)`,
                gridTemplateRows: `repeat(${gridSize}, ${pieceSize}px)`,
                gap: "0px", // Remove gaps between pieces
                width: `${gridSize * pieceSize}px`,
                height: `${gridSize * pieceSize}px`,
                margin: "0 auto", // Center the grid
            }}
        >
            {pieces.map((piece) => (
                <div
                    key={piece.id}
                    className="piece"
                    style={{
                        transform: `rotate(${piece.rotation}deg)`,
                        backgroundImage: `url(/fish.webp)`, // Use the image from the public folder
                        backgroundPosition: `${(piece.id % gridSize) * (100 / (gridSize - 1))}% ${
                            Math.floor(piece.id / gridSize) * (100 / (gridSize - 1))
                        }%`,
                        backgroundSize: `${gridSize * 100}%`,
                        width: `${pieceSize}px`,
                        height: `${pieceSize}px`,
                    }}
                    onClick={() => rotatePiece(piece.id)}
                ></div>
            ))}
        </div>
    );
}

export default FishCaptcha;
