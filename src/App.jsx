
// import Button from "./component/Button"
import ColourBox from "./component/ColourBox"
import data from "./assets/content ";

function App() {
  

  return (
    <div id="wrapper">
  {data.map((item) => {
            return (
              <ColourBox
                key={item.id}
                heading={item.heading}
                para={item.para}
                imgSrc={item.imgSrc}
                author1={item.author1}
                author2={item.author2}
              />
            );
          })}
    </div>
  )
}

export default App
