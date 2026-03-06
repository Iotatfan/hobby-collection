import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from '@/router/index';
import { Flex, Spinner } from '@chakra-ui/react';

function App() {
    return (
        <Suspense
            fallback={
                <Flex w='100%' h='100vh' bgColor='gray.400' opacity={0.6} justifyContent='center' alignItems='center'>
                    <Spinner size='xl'></Spinner>
                </Flex>
            }
        >
            <BrowserRouter>
                <Routes>
                    {routes.map(({ name, path, component: Component, children }, idx) => (
                        <Route key={`${name}-${idx}`} path={path} element={<Component />}>
                            {children?.map(({ name, path, component: Component, children: childs }, idx) => (
                                <Route key={`${name}-${idx}`} path={path} element={<Component />}>
                                    {childs?.map(({ name, path, component: Component }) => (
                                        <Route key={name} path={path} element={<Component />} />
                                    ))}
                                </Route>
                            ))}
                        </Route>
                    ))}
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;