import React from "react";
import Profilepage from "./profilepage";
export default function admin() {
  return (
    <>
      
      
      <div class="container">
      <h3 class="devInfo__title text-center">Pending requests</h3>
    
      <div class="layout">
        <div class="column column--1of3">
          <div class="card text-center">
            <div class="card__body dev">
            <img class="avatar avatar--xl mb-3" src="https://imgs.search.brave.com/L3NsCWcqIsa85M6J1MvqKsxLuOFXumrHwl5Z_jEhQgY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jYW50/by13cC1tZWRpYS5z/My5hbWF6b25hd3Mu/Y29tL2FwcC91cGxv/YWRzLzIwMTkvMDcv/MTkxOTQ0MTcvaW5z/ZXJ0LWltYWdlLWh0/bWwuanBn" />
             
            <div class='mt-3'>@username</div>
              
            </div>
          </div>
        </div>
        <div class="column column--2of3">
          <div class="card text-center">
            <div class="card__body dev">
              <h2 class="dev__name">UserName</h2>
              <p class="dev__title">Submitted on - 15/6/23</p>
              <p class="dev__location">IIIT , Bhubaneswar</p>
              <ul class="dev__social">
                <li>
                  <a title="Github" href="#" target="_blank">
                    <i class="im im-github"></i>
                  </a>
                </li>
                <li>
                  <a title="Stackoverflow" href="#" target="_blank">
                    <i class="im im-stackoverflow"></i>
                  </a>
                </li>
                <li>
                  <a title="Twitter" href="#" target="_blank">
                    <i class="im im-twitter"></i>
                  </a>
                </li>
                <li>
                  <a title="LinkedIn" href="#" target="_blank">
                    <i class="im im-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a title="Personal Website" href="#" target="_blank">
                    <i class="im im-globe"></i>
                  </a>
                </li>
              </ul>
              <a href="#" class="btn  btn--lg mx-3 teal-600 ">
                Approve{" "}
              </a>
              <a href="#" class="btn btn--sub btn--lg mx-3">
                Reject{" "}
              </a>
              <a href="#" class="btn btn--sub btn--lg mx-3">
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      
    
      <div class="layout">
        <div class="column column--1of3">
          <div class="card text-center">
            <div class="card__body dev">
            <img class="avatar avatar--xl mb-3" src="https://imgs.search.brave.com/L3NsCWcqIsa85M6J1MvqKsxLuOFXumrHwl5Z_jEhQgY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jYW50/by13cC1tZWRpYS5z/My5hbWF6b25hd3Mu/Y29tL2FwcC91cGxv/YWRzLzIwMTkvMDcv/MTkxOTQ0MTcvaW5z/ZXJ0LWltYWdlLWh0/bWwuanBn" />
             
            <div class='mt-3'>@username</div>
            
              
            </div>
          </div>
        </div>
        <div class="column column--2of3">
          <div class="card text-center">
            <div class="card__body dev">
              <h2 class="dev__name">UserName</h2>
              <p class="dev__title">Submitted on - 15/6/23</p>
              <p class="dev__location">IIIT , Bhubaneswar</p>
              <ul class="dev__social">
                <li>
                  <a title="Github" href="#" target="_blank">
                    <i class="im im-github"></i>
                  </a>
                </li>
                <li>
                  <a title="Stackoverflow" href="#" target="_blank">
                    <i class="im im-stackoverflow"></i>
                  </a>
                </li>
                <li>
                  <a title="Twitter" href="#" target="_blank">
                    <i class="im im-twitter"></i>
                  </a>
                </li>
                <li>
                  <a title="LinkedIn" href="#" target="_blank">
                    <i class="im im-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a title="Personal Website" href="#" target="_blank">
                    <i class="im im-globe"></i>
                  </a>
                </li>
              </ul>
              <a href="#" class="btn  btn--lg mx-3 teal-600 ">
                Approve{" "}
              </a>
              <a href="#" class="btn btn--sub btn--lg mx-3">
                Reject{" "}
              </a>
              <a href="#" class="btn btn--sub btn--lg mx-3">
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
  
    </>
  
    
  );
}
