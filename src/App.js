import './app.css';
import Head from './components/Head'
import SideBar from './components/SideBar'
import TopBar from './components/TopBar'
import SmallBox from './components/SmallBox'
import BigBox from './components/BigBox'
import Categories from './components/Categories'
import LastProd from './components/LastProd'
import Footer from './components/Footer'
import Table from './components/Table'


function App() {

  let categories = ["Category01","Category02","Category03","Category04","Category05","Category06"]
  let smallBoxes = [
    {
      title: "Products in Data Base",
      icon: "fa-clipboard-list",
      value: 135,
      border: "border-left-primary"
    },
    {
      title: "Amount in products",
      icon: "fa-dollar-sign",
      value: "$546.456",
      border: "border-left-success"
    },
    {
      title: "Users quantity",
      icon: "fa-user-check",
      value: 38,
      border: "border-left-warning"
    }
  ]

  let products=[
    {
      Name:"Tiger Nixon",
      Description:"System Architect",
      Price:320.800,
      Categories:["Category 01","Category 02","Category 03"],
      Colors:[
        {
          Color:"Red",
          Clase:"text-danger"
        },
        {
          Color:"Blue",
          Clase:"text-primary"
        },
        {
          Color:"Green",
          Clase:"text-success"
        }
      ],
      Stock:245
    },
    {
      Name:"Jane Doe",
      Description:"Fullstack developer",
      Price:320.800,
      Categories:["Category 01","Category 02","Category 03"],
      Colors:[
        {
          Color:"Red",
          Clase:"text-danger"
        },
        {
          Color:"Blue",
          Clase:"text-primary"
        },
        {
          Color:"Green",
          Clase:"text-success"
        }
      ],
      Stock:245
    }
  ]
  let columns = Object.keys(products[0])

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
                  {smallBoxes.map((smallBox,i) =>
                    <SmallBox key={"smallBox" + i} 
                      title={smallBox.title}
                      icon={smallBox.icon}
                      value={smallBox.value}
                      border={smallBox.border}
                    />)}
  
                </div>

                {/* <!-- Content Row --> */}
                <div className="row">
                  {/* <!-- Last Product in DB --> */}
                  <BigBox title="Last product in Data Dase">
                    <LastProd />
                  </BigBox>

                  {/* <!-- Categories in DB --> */}
                  <BigBox title="Categories in Data Base">
                    <Categories categories={categories}/>
                  </BigBox> 
                </div>

                {/* <!-- PRODUCTS LIST --> */}
                <h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
                
                {/* <!-- DataTales Example --> */}
                <Table columns={columns} products={products}/>

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
