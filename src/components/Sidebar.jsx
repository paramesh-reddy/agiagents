import React from 'react'
import './Sidebar.css';
export default function sidebar() {
  return (
<div>
<div>
  <div class="row">
    <div class="col-3">
      Column
    </div>

    <div class="col-9" className='layout'>
      <p>Showing 116</p>
      <div className="icons">
        
          <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Newest
  </button>
  <ul class="dropdown-menu">
  
    <li><a class="dropdown-item" href="#">Popular</a></li>
    <li><a class="dropdown-item" href="#">Newest</a></li>
    <li><a class="dropdown-item" href="#">name(A-Z)</a></li>
    <li><a class="dropdown-item" href="#">name(Z-A)</a></li>
  </ul>
</div>
      </div>
    </div>
    <div class="col-4">
      Column
    </div>
  </div>
</div>
</div>
   
  )
}
