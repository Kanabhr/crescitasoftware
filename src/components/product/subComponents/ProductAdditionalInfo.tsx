const additionalInfo = [
    { label: "Brand", value: "Comfort Pointe" },
    { label: "Color", value: "Sea Oat" },
    { label: "Product Dimensions", value: `34"D x 30"W x 42.5"H` },
    { label: "Size", value: "Unspecified" },
    { label: "Product Care Instructions", value: "Wipe Clean" },
    { label: "Unit Count", value: "1.0 Count" },
    { label: "Finish Type", value: "Fabric" },
    { label: "Theme", value: "Unspecified" },
    { label: "Arm Style", value: "Contoured" },
    { label: "Surface Recommendation", value: "Hard Floor" },
    { label: "Furniture Base Movement", value: "Rock" },
    { label: "Indoor/Outdoor Usage", value: "Indoor" },
    { label: "Furniture Finish", value: "Beige" },
    { label: "Item Weight", value: "59 pounds" },
];

const ProductAdditionalInfo = () => {
    return (
        <table>
            <tbody>
                {additionalInfo.map((item, index) => (
                    <tr key={index}>
                        <td>{item.label}</td>
                        <td>{item.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProductAdditionalInfo;
