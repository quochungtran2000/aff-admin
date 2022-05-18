import {
  EcommerceCategoryPage,
  LazadaCategoryPage,
  ShopeeCategoryPage,
  TikiCategoryPage,
} from '../pages/EcommerceCategory';

import { AffiliateLinkPage } from '../pages/AffiliateLink';
import { CategoryPage } from '../pages/Category';
import { ComparePostPage } from '../pages/ComparePost';
import { CrawlProductPage } from '../pages/CrawlProduct';
import { CustomerPage } from '../pages/Customer';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import { ProductTemplatePage } from '../pages/ProductTemplate';
import { Shopping } from '../pages/Shopping';
import { StaffPage } from '../pages/Staff';
import { TopProductPostPage } from '../pages/TopProductPost';

// import { TikiCategoryPage } from '../pages/TikiCategory';

export type CustomRoute = {
  path: string;
  component(): JSX.Element;
  isPublic: boolean;
};

const routes: CustomRoute[] = [
  { path: '/', component: HomePage, isPublic: false },
  { path: '/login', component: LoginPage, isPublic: true },
  { path: '/category', component: CategoryPage, isPublic: false },
  { path: '/ecommerce-category', component: EcommerceCategoryPage, isPublic: false },
  // Category
  { path: '/tiki-category', component: TikiCategoryPage, isPublic: false },
  { path: '/shopee-category', component: ShopeeCategoryPage, isPublic: false },
  { path: '/lazada-category', component: LazadaCategoryPage, isPublic: false },
  // Product
  { path: '/product-template', component: ProductTemplatePage, isPublic: false },
  { path: '/crawl-product', component: CrawlProductPage, isPublic: false },
  { path: '/customer', component: CustomerPage, isPublic: false },
  { path: '/staff', component: StaffPage, isPublic: false },
  { path: '/compare-post', component: ComparePostPage, isPublic: false },
  { path: '/top-product-post', component: TopProductPostPage, isPublic: false },
  { path: '/aff-link', component: AffiliateLinkPage, isPublic: false },
  //Shopping
  { path: '/shopping', component: Shopping, isPublic: false },
];

export default routes;
