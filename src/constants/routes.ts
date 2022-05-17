import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import { ProductTemplatePage } from '../pages/ProductTemplate';
import { CustomerPage } from '../pages/Customer';
import { StaffPage } from '../pages/Staff';
import { CrawlCategoryPage } from '../pages/CrawlCategory';
import { CategoryPage } from '../pages/Category';
import { CrawlProductPage } from '../pages/CrawlProduct';
import { ComparePostPage } from '../pages/ComparePost';
import { TopProductPostPage } from '../pages/TopProductPost';
import { AffiliateLinkPage } from '../pages/AffiliateLink';

export type CustomRoute = {
  path: string;
  component(): JSX.Element;
  isPublic: boolean;
};

const routes: CustomRoute[] = [
  { path: '/', component: HomePage, isPublic: false },
  { path: '/login', component: LoginPage, isPublic: true },
  { path: '/category', component: CategoryPage, isPublic: false },
  { path: '/crawl-category', component: CrawlCategoryPage, isPublic: false },
  { path: '/product-template', component: ProductTemplatePage, isPublic: false },
  { path: '/crawl-product', component: CrawlProductPage, isPublic: false },
  { path: '/customer', component: CustomerPage, isPublic: false },
  { path: '/staff', component: StaffPage, isPublic: false },
  { path: '/compare-post', component: ComparePostPage, isPublic: false },
  { path: '/top-product-post', component: TopProductPostPage, isPublic: false },
  { path: '/aff-link', component: AffiliateLinkPage, isPublic: false },
];

export default routes;
