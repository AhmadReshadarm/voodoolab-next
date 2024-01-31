import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAppDispatch } from 'redux/hooks';
import { AnimatePresence } from 'framer-motion';
import { session } from 'redux/slicers/authSlicer';
import 'styles.css';
import { wrapper } from '../redux/store';
import { ContextProvider } from 'common/context/AppContext';

export type ComponentWithPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: React.FC<any>;
  };
};

function App({ Component, pageProps }: ComponentWithPageLayout) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [isClient, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  useEffect(() => {
    if (!router.pathname.includes('/admin')) {
      dispatch(session());
    }
  }, [router]);
  return (
    <>
      {isClient ? (
        <ContextProvider>
          {Component.PageLayout ? (
            <Component.PageLayout>
              <AnimatePresence mode="wait">
                <Component {...pageProps} key={router.asPath} />
              </AnimatePresence>
            </Component.PageLayout>
          ) : (
            <Component {...pageProps} />
          )}
        </ContextProvider>
      ) : (
        ''
      )}
    </>
  );
}

export default wrapper.withRedux(App);
