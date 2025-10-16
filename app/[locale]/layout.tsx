import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";

import "../globals.css";
import { Inter } from "next/font/google";
import Header from "../shared/header/Header";
import Footer from "../shared/Footer/Footer";
import ReduxProvider from "../providers/ReduxProvider";
import MobileTabs from "../shared/mobileTabs/MobileTabs";
import SideMenu from "../shared/header/SideMenu";
import CategoriesModal from "../shared/categories/CategoriesModal";
import { fetchSubCategories } from "./(home)/services/categoires";
import { makeStore } from "../store/store";
import { setSubCategories } from "../store/features/categoriesSlice";
import { UserProvider } from "../providers/UserProvider";

export const metadata: Metadata = {
  title: "Luxera Gift Shop",
  description:
    "Luxera gift shop is place where you can purchise any gift for your loved one with help of luxera AI. AI will help you shoose the best gift for someone",
};
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  const store = makeStore();

  const allSubcategoriesData = await fetchSubCategories();
  store.dispatch(setSubCategories(allSubcategoriesData));

  const preloadedState = store.getState();

  return (
    <html lang={locale}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
      </head>
      <body className={`font-${inter.style.fontFamily}`}>
        <ReduxProvider preloadedState={preloadedState}>
          <NextIntlClientProvider>
            <UserProvider user={null}>
              <div className="relative">
                <Header />
                <SideMenu />
              </div>
              <main>{children}</main>
              <MobileTabs />
              <Footer />
              <CategoriesModal />
            </UserProvider>
          </NextIntlClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
