import {User , ShoppingCart , Heart , Search } from "lucide-react";

const Links=[
  {
    pathname:'home',
    pathLink:'/'
  },
  {
    pathname:'shop',
    pathLink:'/shop'
  },
  {
    pathname:'blog',
    pathLink:'/blog'
  },
  {
    pathname:'contact',
    pathLink:'/contact'
  }
]
const Help=[
  {
    pathname:'payment options',
    pathLink:'/payment'
  },
  {
    pathname:'return',
    pathLink:'/shop/return'
  },
  {
    pathname:'privacy policy',
    pathLink:'/privacy-policy'
  }
]
const IconLinks=[
  {
    pathLink:'/user',
    pathname:'user',
    icon:<User/>
  },
  {
    pathLink:'/search',
    pathname:'search',
    icon:<Search/>
  },
  {
    pathLink:'/wishlist',
    pathname:'wishlist',
    icon:<Heart/>
  },
  { 
    pathLink:'/cart',
    pathname:'cart',
    icon:<ShoppingCart/>
  }
]
export {Links,IconLinks,Help}
