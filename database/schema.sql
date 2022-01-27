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

INSERT INTO credit_card (name,  bank, spend_threshold, spend_duration, points, benefits, rewards, annual_fee, url)
VALUES ('Chase Sapphire Preferred', 'Chase', 4000, 3, 60000, 'Earn 3X Points on Dinig', 'Get 25% more value when redeemed for travel', 95, 'https://ibb.co/PMLp16F');

INSERT INTO credit_card (name,  bank, spend_threshold, spend_duration, points, benefits, rewards, annual_fee, url)
VALUES ('Chase Sapphire Reserve', 'Chase', 4000, 3, 50000, 'Earn 3X Points on Dining', 'Get 50% more value when redeemed for travel', 550, 'https://i.ibb.co/7RxMKPJ/Screen-Shot-2022-01-25-at-9-18-51-PM.png');

INSERT INTO credit_card (name,  bank, spend_threshold, spend_duration, points, benefits, rewards, annual_fee, url)
VALUES ('AMEX Platinum Card', 'American Express', 6000, 6, 150000, 'Earn 5X Points on Flights', '$200 Uber Credit & $200 Airline Credit', 695, 'https://i.ibb.co/3YTTKJw/Screen-Shot-2022-01-26-at-5-30-28-PM.png');

/* Not done yet */
INSERT INTO credit_card (name,  bank, spend_threshold, spend_duration, points, benefits, rewards, annual_fee, url)
VALUES ('Capital One Venture Rewards', 'Capital One', 3000, 3, 60000, 'Earn unlimited 2 miles per dollar on every purchase', 'Receive up to $100 credit for Global Entry or TSA PreCheck', 95, 'https://i.ibb.co/m6gwTdh/Screen-Shot-2022-01-26-at-9-07-45-PM.png');

INSERT INTO credit_card (name,  bank, spend_threshold, spend_duration, points, benefits, rewards, annual_fee, url)
VALUES ('Citi Premier Card', 'Citi Bank', 4000, 3, 60000, '3X on Restaurants, Supermarkets, Gas Station, Air Travel & Hotel', '$100 Hotel Annual Credit for Purchases more than $500', 95, 'https://i.ibb.co/G3sYHGt/Screen-Shot-2022-01-26-at-10-11-47-PM.png');

INSERT INTO credit_card (name,  bank, spend_threshold, spend_duration, points, benefits, rewards, annual_fee, url)
VALUES ('AMEX Gold Card', 'American Express', 4000, 6, 75000, '4X On Dining & Groceries. 3X On Flights.', '$120 Uber Credit', 250, 'https://i.ibb.co/0q7dw0H/Screen-Shot-2022-01-26-at-11-13-35-PM.png');