export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ThreeComponent />} />
        <Route path="/page" element={<PageComponent />} />
      </Routes>
    </BrowserRouter>
  );
}