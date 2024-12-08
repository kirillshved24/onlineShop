export const Colors = ({ colors, selectedColors, onColorSelect }) => {
    return (
        <div className='signContainer'>
            <div className='priceBlock'>
                <p className='titleAccent'>Colors</p>
                <span className='lineAll'></span>
            </div>
            {colors.map(color => (
                <div key={color} className='color'>
                    <input
                        type='checkbox'
                        className='checkbox'
                        value={color}
                        checked={selectedColors.includes(color)}
                        onChange={onColorSelect}
                    />
                    <label className='checkbox-label'>{color}</label>
                </div>
            ))}
        </div>
    );
};