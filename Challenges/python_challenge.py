import random

while True:
    playersChoice = input("Enter a choice (Rock(r), Paper(p), Scissors(s)): ")
    if playersChoice == 'b':
        break
    elif playersChoice not in ['r', 'p', 's']:
        print("Invalid input")
        continue
    
    choices = {'r': 'rock', 'p': 'paper', 's': 'scissors'}
    computersChoice = random.choice(['r', 'p', 's'])

    print(f"You chose {choices[playersChoice]}, the computer chose {choices[computersChoice]}.")

    if playersChoice == computersChoice:
        print(f"Both players selected {choices[playersChoice]}, It's a tie!")
    elif (playersChoice == 'r' and computersChoice == 's') or (playersChoice == 'p' and computersChoice == 'r') or (playersChoice == 's' and computersChoice == 'p'):
        print("You win!")
    else:
        print("You lose!")

    replay = input("Play again? (y/n): ")
    if replay == 'y':
        continue
    elif replay == 'n':
        break
    break