// Love Message Generator
function generateMessage() {
    const you = document.getElementById("yourName").value.trim();
    const crush = document.getElementById("crushName").value.trim();

    const messages = [
        `😏 ${crush}, ${you} loves you more than WiFi.`,
        `😂 ${crush}, you're the reason ${you} smiles for no reason.`,
        `❤️ ${crush}, if love was a bug, ${you} would never fix it.`,
        `😌 ${crush}, ${you} likes you… a lot.`,
        `💘 ${crush}, you're ${you}'s favorite notification.`,
        `🥰 ${you} can't stop thinking about ${crush}.`,
        `💕 ${crush}, you make ${you}'s heart skip a beat.`,
        `😍 ${you} would choose ${crush} over pizza… maybe.`,
        `💖 ${crush}, ${you} thinks you're absolutely perfect.`,
        `🌹 ${you} wants to spend forever with ${crush}.`
    ];

    if (you === "" || crush === "") {
        document.getElementById("result").innerText = "Fill the names first 😭";
        return;
    }

    const random = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("result").innerText = random;
    
    // Create heart animation
    createHeart();
}

// Valentine Countdown
const valentineDate = new Date("Feb 14, 2026 00:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = valentineDate - now;

    if (diff < 0) {
        document.getElementById("countdown").innerText = "💕 Happy Valentine's Day! 💕";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerText =
        `${days} days ${hours}h ${minutes}m ${seconds}s ❤️`;
}, 1000);

// Love Calculator
function calculateLove() {
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if (name1 === "" || name2 === "") {
        document.getElementById("loveResult").innerText = "Enter both names! 😊";
        return;
    }

    // Create a "random" but consistent percentage based on names
    const combined = name1.toLowerCase() + name2.toLowerCase();
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
        hash = combined.charCodeAt(i) + ((hash << 5) - hash);
    }
    const percentage = Math.abs(hash % 41) + 60; // Range: 60-100%

    const messages = {
        high: [
            "🔥 Perfect Match! You two are soulmates!",
            "💯 Incredible chemistry! True love!",
            "✨ Made for each other! Stunning compatibility!"
        ],
        medium: [
            "💕 Great potential! Keep the spark alive!",
            "😊 Sweet connection! Beautiful together!",
            "🌟 Lovely match! Nurture this bond!"
        ],
        low: [
            "💪 Love takes work, but you got this!",
            "🌱 Room to grow! Every love story is unique!",
            "💖 Opposites attract! Make it work!"
        ]
    };

    let message;
    if (percentage >= 85) {
        message = messages.high[Math.floor(Math.random() * messages.high.length)];
    } else if (percentage >= 70) {
        message = messages.medium[Math.floor(Math.random() * messages.medium.length)];
    } else {
        message = messages.low[Math.floor(Math.random() * messages.low.length)];
    }

    document.getElementById("loveResult").innerText = `${percentage}% Love Match! ${message}`;
    
    // Show love bar
    const loveBar = document.getElementById("loveBar");
    loveBar.innerHTML = `<div class="love-bar-fill" style="width: ${percentage}%">${percentage}%</div>`;
    
    createHeart();
}

// Moving No Button
function moveButton() {
    const btn = document.getElementById("noBtn");
    const card = btn.closest('.card');
    
    btn.style.position = "absolute";
    btn.style.left = Math.random() * 60 + 10 + "%";
    btn.style.top = Math.random() * 40 + 30 + "%";
    
    // Make Yes button bigger each time
    const yesBtn = document.getElementById("yesBtn");
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize + 2) + "px";
}

function sayYes() {
    const messages = [
        "Awww 🥹❤️ Happy Valentine!",
        "I knew it! 💕 You're the best!",
        "Yaaaay! 🎉 Love you too!",
        "Best decision ever! 💖",
        "You made my day! 😍"
    ];
    
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("questionResult").innerText = randomMsg;
    
    // Create multiple hearts
    for (let i = 0; i < 10; i++) {
        setTimeout(() => createHeart(), i * 100);
    }
}

// Love Quiz
function answerQuiz(answer) {
    const responses = {
        romantic: "💕 You're a classic romantic! Candlelight and roses are your thing. So sweet!",
        adventure: "🌄 You're an adventurous soul! Love under the stars and adrenaline rushes!",
        chill: "🎬 You're a comfort lover! Cozy nights and good vibes are your style!"
    };
    
    document.getElementById("quizResult").innerText = responses[answer];
}

// Compliment Generator
function getCompliment() {
    const compliments = [
        "✨ You light up every room you walk into!",
        "🌟 Your smile is absolutely contagious!",
        "💫 You're one in a million!",
        "🌺 Your kindness makes the world better!",
        "🦋 You're beautiful inside and out!",
        "🌈 Your energy is amazing!",
        "💎 You're a rare gem!",
        "🌸 Your presence is a gift!",
        "⭐ You're incredibly special!",
        "🎨 You bring color to life!"
    ];
    
    const random = compliments[Math.floor(Math.random() * compliments.length)];
    document.getElementById("compliment").innerText = random;
    createHeart();
}

// Create floating hearts animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    
    document.getElementById("heartsContainer").appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create hearts on page load
window.addEventListener('load', () => {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => createHeart(), i * 500);
    }
});