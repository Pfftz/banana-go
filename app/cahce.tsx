<form id="cart-form">

    
    <h3>Kemeja Lengan Panjang</h3>
    <div className="product-price">Rp 150.000</div>

    <input type="hidden" name="item_price" id="item-price" value="150000">
        <input type="hidden" name="item_name" value="Kemeja Lengan Panjang">

            
            <label for="quantity-input" class="quantity-label">Jumlah</label>

            
            <div className="quantity-input">
                <button className="minus-btn" type="button" aria-label="Kurangi Kuantitas">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                    </svg>
                </button>

                
                <input type="number" name="quantity" id="quantity-input" value="1" min="1" max="10" aria-label="Kuantitas">

                    <button className="plus-btn" type="button" aria-label="Tambah Kuantitas">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </button>
            </div>

            <div className="total-price">
                <span className="total-label">Total Harga:</span>
                <span className="total-value" id="total-price-value">Rp 150.000</span>
            </div>

            <button type="submit" className="submit-btn">Tambah ke Keranjang</button>

        </form>