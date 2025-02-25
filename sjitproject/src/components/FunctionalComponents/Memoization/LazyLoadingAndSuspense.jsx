import { Suspense, lazy } from "react";

const LazyComp = lazy(() => import("../Signup.jsx"));

const LazyLoadingAndSuspense = () => {
    return (
        <div>
            <h1>This is Lazy component</h1>
            <Suspense fallback={<p>Loading...</p>}>
                <LazyComp />
            </Suspense>
        </div>
    );
};

export default LazyLoadingAndSuspense;
