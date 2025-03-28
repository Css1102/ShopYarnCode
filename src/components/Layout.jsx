import React from 'react'

function Layout() {
  return (
<div>
  <Header/>
  <Outlet/>
  <Footer/>
</div>
  )
}

export default Layout