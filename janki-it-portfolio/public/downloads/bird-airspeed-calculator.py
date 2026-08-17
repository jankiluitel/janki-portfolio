# Constants
STROUHAL_LOW_EFFICIENCY = 0.4
STROUHAL_HIGH_EFFICIENCY = 0.2

# Display program details
print("Bird Airspeed Calculator")
print("This program calculates the minimum and maximum airspeed of a bird based on frequency and amplitude.")

# Read in the name of the bird from the user
bird_name = input("Enter the name of the bird: ")

# Read the frequency and amplitude - converting from string to double
freq = float(input("Enter the frequency of the bird's wing flaps (Hz): "))
amp = float(input("Enter the amplitude of the bird's wing flaps (m): "))

# Declare variables to store results
result_max = 0.0
result_min = 0.0

# Calculate the airspeed, given the fixed Strouhal values
result_max = freq * amp / STROUHAL_HIGH_EFFICIENCY
result_min = freq * amp / STROUHAL_LOW_EFFICIENCY

# Output the bird's name, and its min and max airspeed
print("\nBird:", bird_name)
print("Minimum airspeed:", result_min, "m/s")
print("Maximum airspeed:", result_max, "m/s")
