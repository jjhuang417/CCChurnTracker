CREATE TABLE credit_card (
 id BIGSERIAL,
 name VARCHAR(50) NOT NULL,
 bank VARCHAR(50) NOT NULL,
 current_spend INTEGER DEFAULT 0,
 spend_threshold INTEGER NOT NULL,
 spend_duration INTEGER NOT NULL,
 points INTEGER NOT NULL,
 benefits VARCHAR(250),
 rewards VARCHAR(250),
 annual_fee INTEGER,
 url VARCHAR(255),
 finished BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO credit_card (name,  bank, current_spend, spend_threshold, spend_duration, points, benefits, rewards, annual_fee, url)
VALUES ('Chase Sapphire Preferred', 'Chase', 0, 4000, 3, 60000, 'Earn 3X Points on Dinig', 'Get 25% more value when redeemed for travel', 95, 'https://ibb.co/PMLp16F');