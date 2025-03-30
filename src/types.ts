export type Item = {
    itemId: number,
    itemName: string,
    itemKind: string,
    itemRarity: string
}

export type ItemCraftIngredient = {
    ingredientId: number,
    itemName: string,
    quantity: number
}

export type ItemCraft = {
    itemId: number,
    location: string,
    time: number,
    ingredients: ItemCraftIngredient[]
}