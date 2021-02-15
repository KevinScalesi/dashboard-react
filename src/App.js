import './App.css';
import Head from './components/Head'
import SideBar from './components/SideBar'
import TopBar from './components/TopBar'
import SmallBox from './components/SmallBox'
import BigBox from './components/BigBox'
import Categories from './components/Categories'
import LastProd from './components/LastProd'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">

      <Head />

      <body>

        <div id="wrapper">
          
          <SideBar />

          {/* <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">

            {/* <!-- Main Content --> */}
            <div id="content">

              <TopBar />

              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid">

                {/* <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>

                {/* <!-- Content Row --> */}
                <div className="row">

                  {/* <!-- Amount of Products in DB --> */}
                  <SmallBox title="Products in Data Base" icon="fa-clipboard-list" value="135"  border="border-left-primary"/>

                  {/* <!-- $$$ of all products in DB --> */}
                  <SmallBox title=" Amount in products" icon="fa-dollar-sign" value="$546.456" border="border-left-success"/>
                  
                  {/* <!-- Amount of users in DB --> */}
                  <SmallBox title="Users quantity" icon="fa-user-check" value="38" border="border-left-warning"/>
  
                </div>

                {/* <!-- Content Row --> */}
                <div className="row">
                  {/* <!-- Last Product in DB --> */}
                  <BigBox title="Last product in Data Dase" SubBox={LastProd}/>

                  {/* <!-- Categories in DB --> */}
                  <BigBox title="Categories in Data Base" SubBox={Categories}/> 
                </div>
              </div>
              {/* <!-- /.container-fluid --> */}
            </div>
            {/* <!-- End of Main Content --> */}

            {/* <!-- Footer --> */}
            <Footer />
            {/* <!-- End of Footer --> */}

          </div>
          {/* <!-- End of Content Wrapper --> */}

        </div>
        {/* <!-- End of Page Wrapper --> */}

        </body>
    </div>
  );
}

export default App;
