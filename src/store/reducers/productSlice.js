import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Product from "../Api/product";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

export const getAllProducts = createAsyncThunk(
  'product/all',
  async (id, { rejectWithValue }) => {
    try {
      const response = await Product.getAllProducts();
      return response.data;
    } catch(error) {
      if (!error.response) {
        throw err
      }
      return rejectWithValue(error.response.data)
    }
  }
)

export const getAllVideos = createAsyncThunk(
  'product/all/videos',
  async (id, { rejectWithValue }) => {
    try {
      const response = await Product.getVideos();
      return response.data;
    } catch(error) {
      if (!error.response) {
        throw err
      }
      return rejectWithValue(error.response.data)
    }
  }
)


export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    allUniqueCategory : [],
    allUniqueTag : [],
    specificProduct: {},
    featuredImages: [],
    featuredVideo: [],
    imageCategories: [],
    videoCategories: [],
    
    addToCart: typeof window !== 'undefined' && localStorage.getItem('addToCart') ? 
    JSON.parse(localStorage.getItem('addToCart')) : [],

    wishlist:typeof window !== 'undefined' && localStorage.getItem('addToWishList') ? 
    JSON.parse(localStorage.getItem('addToWishList')) : [],
  },
  reducers: {
    // specificProduct
    specificItem:(state,{payload}) => {
      state.specificProduct = state.products.find(product => product.id === payload)
    },
    // addToProduct
    addToProduct: (state, { payload }) => {
      const itemIndex = state.addToCart.findIndex((item) => item.id === payload.id);
      if (itemIndex >= 0) {
        state.addToCart[itemIndex].cartQuantity += 1
        toast.info('Increase Product Quantity', {
          position: 'top-left'
        })
      }
      else {
        const tempProduct = { ...payload, cartQuantity: 1 };
        state.addToCart.push(tempProduct)
        toast.success(`${payload.title} added to cart`, {
          position: 'top-left'
        })
      }

      localStorage.setItem('addToCart', JSON.stringify(state.addToCart))
    },
    // removeProduct
    removeProduct: (state, { payload }) => {
      state.addToCart = state.addToCart.filter((cart) => cart.id !== payload);
      toast.error(`remove from your cart`, {
        position: 'top-left'
      })

      localStorage.setItem('addToCart', JSON.stringify(state.addToCart))
    },
    // decreaseCart
    decreaseCart: (state, { payload }) => {
      const itemIndexNumber = state.addToCart.findIndex(cartItem => cartItem.id === payload.id);


      if (state.addToCart[itemIndexNumber].cartQuantity > 1) {
        state.addToCart[itemIndexNumber].cartQuantity -= 1

        toast.error(`Decreased cart quantity`, {
          position: 'top-left'
        })
      }

      else if (state.addToCart[itemIndexNumber].cartQuantity === 1) {
        state.addToCart = state.addToCart.filter((cart) => cart.id !== payload.id);
        toast.error(`${payload.title} remove from cart`, {
          position: 'top-left'
        })
      }

      localStorage.setItem('addToCart', JSON.stringify(state.addToCart))

    },

    // clear cart
    clearCart:(state,action) => {
      state.addToCart = [];
      localStorage.setItem('addToCart', JSON.stringify(state.addToCart))
    },
    // add wish list product
    addToWishList:(state,{payload}) => {
      state.wishlist.push(payload);
      Swal.fire({
        icon: 'success',
        title: `${payload.title} `,
        text: 'addedd to your wishlist', 
     })
     localStorage.setItem('addToWishList', JSON.stringify(state.wishlist))
    },
    // remove wishlist product
    removeWishListProduct:(state,{payload}) => {
      state.wishlist = state.wishlist.filter(product => product.id !== payload.id);
      toast.error(`${payload.title} remove from your wishlist`, {
        position: 'top-left'
      })

    localStorage.setItem('addToWishList', JSON.stringify(state.wishlist))
    }

  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.allUniqueCategory = [...new Set(action.payload.map(category => category.category))],
      state.allUniqueTag = [...new Set(action.payload.map(tag => tag.tag))],
      state.specificProduct = [0];
      return state;
    })
  }
})

// Action creators are generated for each case reducer function
export const { addToProduct, removeProduct, decreaseCart,specificItem,clearCart,addToWishList,removeWishListProduct } = productSlice.actions;

export const selectCartProduct = (state) => state.products.addToCart;
export default productSlice.reducer;