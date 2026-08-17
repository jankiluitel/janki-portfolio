# Constants
TWO_DOLLARS = 200
ONE_DOLLAR = 100
FIFTY_CENTS = 50
TWENTY_CENTS = 20
TEN_CENTS = 10
FIVE_CENTS = 5

# Function to calculate change
def calculate_change(cost_of_item, amount_paid):
    change_value = amount_paid - cost_of_item
    return change_value

# Function to give change in coins
def give_change(change_value):
    print("Change to give:")
    
    # Give $2 coins
    to_give = change_value // TWO_DOLLARS
    print("$2 coins:", to_give)
    change_value -= to_give * TWO_DOLLARS

    # Give $1 coins
    to_give = change_value // ONE_DOLLAR
    print("$1 coins:", to_give)
    change_value -= to_give * ONE_DOLLAR

    # Give 50c coins
    to_give = change_value // FIFTY_CENTS
    print("50c coins:", to_give)
    change_value -= to_give * FIFTY_CENTS

    # Give 20c coins
    to_give = change_value // TWENTY_CENTS
    print("20c coins:", to_give)
    change_value -= to_give * TWENTY_CENTS

    # Give 10c coins
    to_give = change_value // TEN_CENTS
    print("10c coins:", to_give)
    change_value -= to_give * TEN_CENTS

    # Give 5c coins
    to_give = change_value // FIVE_CENTS
    print("5c coins:", to_give)

# Main function
def main():
    # Get details from the user
    cost_of_item = int(input("Enter the cost of the item: "))
    amount_paid = int(input("Enter the amount paid: "))

    # Calculate change
    change_value = calculate_change(cost_of_item, amount_paid)

    # Give change
    give_change(change_value)

if __name__ == "__main__":
    main()
