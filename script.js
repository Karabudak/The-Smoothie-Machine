document.getElementById('orderButton').addEventListener('click', function() {
    // Capture form values
    const name = document.getElementById('name').value;
    const size = document.getElementById('size').value;
    const base = document.getElementById('base').value;
    const ingredients = Array.from(document.querySelectorAll('input[name="ingredients"]:checked'))
                            .map(checkbox => checkbox.value);

    // Create Smoothie object
    const smoothie = new Smoothie(name, size, base, ingredients);

    // Output order summary
    document.getElementById('orderSummary').innerHTML = smoothie.getDescription();
});

// Smoothie class definition
class Smoothie {
    constructor(name, size, base, ingredients) {
        this.name = name;
        this.size = size;
        this.base = base;
        this.ingredients = ingredients;
    }

    getDescription() {
        return `
            <h2>Order Summary</h2>
            <p><strong>Name:</strong> ${this.name}</p>
            <p><strong>Size:</strong> ${this.size}</p>
            <p><strong>Base:</strong> ${this.base}</p>
            <p><strong>Ingredients:</strong> ${this.ingredients.join(', ')}</p>
            ${this.getImage()}
        `;
    }

    getImage() {
        const images = {
            banana: '/Users/bedirhankarabudak/Desktop/ Smoothie Machine/images/banana-smoothie-1.jpeg', // Replace with actual image URL
            strawberry: '/Users/bedirhankarabudak/Desktop/ Smoothie Machine/images/strawberry-banana-smoothie-4.jpg', // Replace with actual image URL
            spinach: '/Users/bedirhankarabudak/Desktop/ Smoothie Machine/images/spinach-smoothie.jpg'  // Replace with actual image URL
        };

        return this.ingredients.map(ingredient => {
            if (images[ingredient]) {
                return `<img src="${images[ingredient]}" alt="${ingredient} smoothie">`;
            }
            return '';
        }).join('');
    }
}
