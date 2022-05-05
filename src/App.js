import './App.scss';
import './assets/styles/scss/abstracts/variables.scss'
import { useState } from 'react';

function App() {

 const [bestOfs, setBestOfs] = useState(null)
 const [loading, setLoading] = useState(false)

 const onFileChange = event => { 

  setLoading(true)

  var files = event.target.files

  if (files.length <= 0) {
    return false;
  }

  files[0].text().then(function(text) { 
    var result = JSON.parse(text);
    const filteredItems = result.items.filter(item => item.isBestOf === true)
    const filteredItemsSorted = filteredItems.sort((a,b) => (a.sortingNumber > b.sortingNumber) ? 1 : ((b.sortingNumber > a.sortingNumber) ? -1 : 0))
    setBestOfs(filteredItemsSorted)
    console.log(filteredItemsSorted)
    setLoading(false)
  })

}; 

const removeTextInBrackets = (text) => {

  const roundBracketsRemoved = text.split('(')[0]

  const squareBracketsRemoved = roundBracketsRemoved.split('[')[0]

return squareBracketsRemoved
}

  return (
    <div className="App">
      <div className="App-body">
        {bestOfs ? 
        <>
        {bestOfs.map(item => <div className="tile" key={item.metadata.id}>
         <div className="previewContainer">
          <img className="previewImage" src={item.images.overall.images[0].sizes.medium.src} alt={item.metadata.id} />
         </div> 
         <div className="h1" >
         {item.metadata.title}, {item.metadata.date}
          </div>
          <div className="h2" >
         {removeTextInBrackets(item.medium)}
          </div>
             <div className="h2" >
         {item.repository}
          </div>

        </div>)}
        </>
        :
        <>
        {loading ? 
        
        <p > 
        Loading ...
      </p>
        :
        <>

        <p className="h1">  
          Upload the target json file. 
        </p>

        {bestOfs ? 
        <div >{JSON.stringify(bestOfs).slice(0, 10)}</div>
          :  
        <div> 
          <input type="file" onChange={onFileChange} accept="application/JSON"/> 
        </div> }</>
        
        }
        </>}
      </div>
    </div>
  );
}

export default App;
