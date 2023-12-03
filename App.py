# combination_finder.py

def find_combination(numbers, target, current_combination=None, index=0):
    if current_combination is None:
        current_combination = []

    if target == 0:
        return [current_combination]  # Found a combination that adds up to the total

    if target < 0 or index == len(numbers):
        return []  # No combination found

    # Explore two possibilities: include the current number or skip it
    include_current = find_combination(numbers, target - numbers[index], current_combination + [numbers[index]], index + 1)
    skip_current = find_combination(numbers, target, current_combination, index + 1)

    return include_current + skip_current

def main():
    # User input
    user_input = input("Enter a set of numbers (separated by commas): ")
    target_sum = int(input("Enter the target total: "))

    # Convert input string into a list of integers
    numbers = [int(num) for num in user_input.split(',')]

    # Find combination
    result = find_combination(numbers, target_sum)

    # Display result
    if result:
        print(f"A subset of numbers that adds up to {target_sum}: {result}")
    else:
        print("No subset found.")

if __name__ == "__main__":
    main()
