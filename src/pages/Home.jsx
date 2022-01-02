import InputText from '../component/InputText/InputText';
//component
const Home = () => {
//Js logic

//component should return jsx(html)
//<>.....</> It is a fragment used to  wrap and provide root element to react.
// It will do not add any element in actual DOM.

return (
    <>
        <div>Home Page</div>
        <InputText/>
    </>
);
};

export default Home;