# CCChurnTracker
A small personal project for tracking credit cards and sign up bonuses. For any credit card churners, jumping around different bank apps to check your credit cards can be annoying, this app is aimed to keep track of all of the credit cards you own.

Front End
- App component
- Dynamic lists of credit cards
- Dropdown of a bunch of credit cards with an add button to add the card to the list
- Individual entries of credit card
  + A picture of the credit card
  + Progres bar for tracking spend
  + Countdown timer for when the sign up bonus expires.
  + Details of the sign up bonus

Back End
- Express server
- Postgres DB
  + CreditCardData table
    - Name of card
    - Picture of card
    - Spend amount
    - Duration for spend
    - Card benefits
  + UserCard table
    - Name of card
    - Picture of card
    - Spend amount
    - Duration for spend
    - Card benefits
    - Churned? (boolean)