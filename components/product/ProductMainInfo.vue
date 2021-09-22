<template>
  <div class="goods__main-info">
    <div class="goods__header">
      <h1 class="goods__title">
        {{ product.name }}
      </h1>
      <div class="goods__code">Артикул<span class="code">{{ product.artnumber }}</span></div>
      <a href="#" class="goods__link">printbar.ru</a>
    </div>
    <div class="goods__price">
      <span class="old-price" data-price="old">{{ parseInt(product.price) + typeClothData.price + typePrintData.price }}</span>
      <span class="new-price" data-price="new">{{ parseInt(product.d_price) + typeClothData.price + typePrintData.price }} ₽</span>
    </div>
    <div class="goods__descr">
      <h3 class="goods__subtitle">Описание</h3>
      <p class="goods__type" data-type="cloth-type">
        {{ declinationCategories[product.sex][product.category.alias] }}
      </p>
      <p class="goods__descr-text">
        {{ product.description }}
      </p>
    </div>
    <RadioTypeDesktop
      :productTypeCloth="productTypeCloth"
      :productTypePrint="productTypePrint"
      :productCategoryAlias="product.category.alias"
      @updateTypeCloth="updateTypeCloth"
      @updateTypePrint="updateTypePrint"
    />
    <RadioSizeDesktop
      :sizeData="sizeData"
      :sex="product.sex == 1 ? 'mans' : 'woomans'"
      :sizesDataArray="sizesDataArray"
      :productCategoryAlias="product.category.alias"
      @updateSizeData="updateSizeData"
      @showTable="showTable"/>
    <SizeTableDesktop
      :sizeData="sizeData"
      :sex="product.sex == 1 ? 'mans' : 'woomans'"
      :productCategoryAlias="product.category.alias"
      :sizesDataArray="sizesDataArray"
      :class="{ hidden: !isShowTable }"
      @updateSizeData="updateSizeData"
    />
    <RadioDeliveryDesktop/>
    <div class="goods__order">
      <ProductCounterDesktop :quantity="quantity" @updateQuantity="updateQuantity"/>
      <button v-if="!isProductInCart" @click="onAddCart" type="button" class="buy">
        Беру!
      </button>
      <NuxtLink v-else class="buy" to="/cart">Перейти в корзину</NuxtLink>
    </div>
  </div>
</template>
<script>
import RadioTypeDesktop from '@/components/product/desktop/RadioTypeDesktop'
import RadioSizeDesktop from '@/components/product/desktop/RadioSizeDesktop'
import RadioDeliveryDesktop from '@/components/product/desktop/RadioDeliveryDesktop'
import SizeTableDesktop from '@/components/product/desktop/SizeTableDesktop'
import ProductCounterDesktop from '@/components/product/desktop/ProductCounterDesktop'
import { productTypeCloth } from '@/data/productTypeCloth'
import { productTypePrint } from '@/data/productTypePrint'
import { sizesDataArray } from '@/data/sizesDataArray'
import { declinationCategories } from '@/data/declinationCategories'

export default {
  components: {
    RadioTypeDesktop,
    RadioSizeDesktop,
    RadioDeliveryDesktop,
    SizeTableDesktop,
    ProductCounterDesktop
  },
  data: () => ({
    isProductInCart: false,
    quantity: 1,
    sizeData: {},
    sizesTable: {},
    typeClothData: {},
    typePrintData: {},
    isShowTable: false
  }),
  props: {
    product: Object,
    cart: Array
  },
  computed: {
    productTypeCloth () {
      return productTypeCloth
    },
    productTypePrint () {
      return productTypePrint
    },
    sizesDataArray () {
      return sizesDataArray
    },
    declinationCategories () {
      return declinationCategories
    }
  },
  methods: {
    showTable () {
      this.isShowTable = !this.isShowTable
    },
    updateSizeData (size) {
      this.sizeData = size
      this.checkProductInCart()
    },
    updateTypeCloth (payload) {
      this.typeClothData = payload
      this.checkProductInCart()
    },
    updateTypePrint (payload) {
      this.typePrintData = payload
      this.checkProductInCart()
    },
    updateQuantity (quantity) {
      this.quantity = quantity
      this.checkProductInCart()
    },
    setDefaultSizeData () {
      this.sizeData = this.sizesDataArray.filter(item => item[this.product.sex === 1 ? 'mans' : 'woomans'][this.product.category.alias])[0]
    },
    createProduct () {
      const product = {
        id: this.product.id,
        name: this.product.name,
        alias: this.product.alias,
        basePrice: parseInt(this.product.price),
        baseDPrice: parseInt(this.product.d_price),
        price: parseInt(this.product.price) + this.typeClothData.price + this.typePrintData.price,
        d_price: parseInt(this.product.d_price) + this.typeClothData.price + this.typePrintData.price,
        image: this.product.image,
        quantity: this.quantity,
        category: this.product.category.name,
        categoryCode: this.product.category.alias,
        collection: this.product.collection.name,
        collectionCode: this.product.collection.alias,
        card: this.typeClothData,
        print: this.typePrintData,
        size: this.sizeData,
        sex: this.product.sex,
        artnumber: this.product.artnumber
      }
      return product
    },
    checkProductInCart () {
      const product = this.createProduct()
      this.isProductInCart = false
      for (let i = 0; i < this.cart.length; i++) {
        const item = this.cart[i]
        if (JSON.stringify(item) === JSON.stringify(product)) {
          console.log('Такой товар есть в корзине')
          this.isProductInCart = true
        }
      }
    },
    onAddCart () {
      const product = this.createProduct()
      if (!this.isProductInCart) {
        this.$store.dispatch('cart/addCartItem', product)
        this.isProductInCart = true
      }
    }
  },
  created () {
    this.typeClothData = this.productTypeCloth[this.product.category.alias][0]
    this.typePrintData = this.productTypePrint[0]
    this.setDefaultSizeData()
    this.checkProductInCart()
  },
  watch: {
    product () {
      this.setDefaultSizeData()
      this.checkProductInCart()
    }
  }
}
</script>
