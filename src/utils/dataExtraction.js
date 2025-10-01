
const getMainIngredientFromName = (name) => {
    const commonIngredients = [
        'chicken', 'potato', 'leek', 'beef', 'fish', 'pasta', 'noodles', 'soup',
        'rice', 'spaghetti', 'salmon', 'shrimp', 'vegetable', 'cheese', 'cheesecake', 'cinnamon', 'salad', 'egg', 'cookies', 'cake', 'dessert', 'pancackes', 'milkshake', 'pie'
    ];

    const words = name.toLowerCase().split(' ');
    return words.find(word => commonIngredients.includes(word)) || 'unknown';
};
const getMainIngredientFromTags = (tags) => {
    const ingredientTags = tags.filter(tag =>
        ['chicken', 'beef', 'fish', 'potato', 'vegetable'].includes(tag.display_name.toLowerCase())
    );
    return ingredientTags[0]?.display_name || 'unknown';
};

const getMainIngredientFromComponents = (components) => {
    const nonBasicIngredients = components.filter(comp =>
        !['salt', 'pepper', 'oil', 'butter', 'water', 'garlic', 'onion', 'sugar', 'sauce', 'cup', 'flour', 'tablespoons', 'teaspoon', 'coccoa']
            .some(basic => comp.raw_text.toLowerCase().includes(basic))
    );
    return nonBasicIngredients[0]?.raw_text.split(' ').slice(0, 3).join(' ') || 'unknown';
};

export const extractMainIngredient = (data) => {
    const fromName = getMainIngredientFromName(data.name);
    if (fromName !== 'unknown') return fromName;

    const fromTags = getMainIngredientFromTags(data.tags);
    if (fromTags !== 'unknown') return fromTags;

    return getMainIngredientFromComponents(data.sections[0]?.components || []);
};


