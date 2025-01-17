import React from 'react'
import { useState } from 'react'
export default function profilepage(props) {
    const [userPermission, setuserPermission] = useState(props.client)
  return (

    <div>
      <main class="profile my-md">
    <div class="container">
      <div class="layout">
        <div class="column column--1of3">
          <div class="card text-center">
            <div class="card__body dev">
              <img class="avatar avatar--xl" src="" />
              <h2 class="dev__name">Prof</h2>
              <p class="dev__title">Tagline / Skills</p>
              <p class="dev__location">IIIT , Bhubaneswar</p>
              <ul class="dev__social">
                <li>
                  <a title="Github" href="#" target="_blank"><i class="im im-github"></i></a>
                </li>
                <li>
                  <a title="Stackoverflow" href="#" target="_blank"><i class="im im-stackoverflow"></i></a>
                </li>
                <li>
                  <a title="Twitter" href="#" target="_blank"><i class="im im-twitter"></i></a>
                </li>
                <li>
                  <a title="LinkedIn" href="#" target="_blank"><i class="im im-linkedin"></i></a>
                </li>
                <li>
                  <a title="Personal Website" href="#" target="_blank"><i class="im im-globe"></i></a>
                </li>
              </ul>
              {userPermission == 'admin' && <a href="/adminrequest" class="btn btn--sub btn--lg">View Pending requests </a>}
         
           <a href="#" class="btn btn--sub btn--lg">View Research papers </a>
            </div>
          </div>
        </div>
        <div class="column column--2of3">
          <div class="devInfo">
            <h3 class="devInfo__title">About Me</h3>
            <p class="devInfo__about">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex illum ipsum iusto consequatur. Totam,
              dolorum fugiat, debitis facere illo nostrum nesciunt maxime, deserunt enim voluptatibus modi natus velit
              voluptatum. Dicta eritatis exercitationem ut quos a placeat obcaecati? Architecto illum!
              <br />
              Amet consectetur adipisicing elit. Veritatis exercitationem ut quos a placeat obcaecati? Architecto
              illum, atque delectus nemo dolorem inventore ab facilis? Dolor placeat vel delectus ipsam ullam.
            </p>
          </div>
          <div class="devInfo">
            <h3 class="devInfo__title">Education </h3>
            <div class="devInfo__skills">
              <div class="devSkill">
                <h4 class="devSkill__title">UG / PG / Phd</h4>
                <p class="devSkill__info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae neque voluptatum ut? Quaerat, ea
                  cumque! Dolorum provident esse molestias commodi odit sapiente quod quasi corrupti obcaecati? Nobis
                  ex temporibus quaerat!
                </p>
              </div>
              <div class="devSkill">
                <h4 class="devSkill__title">Exp</h4>
                <p class="devSkill__info">
                  Smet consectetur adipisicing elit. Omnis, nihil? Accusamus aspernatur aut debitis vitae quaerat
                  nihil fugiat, doloremque nesciunt alias pariatur maxime unde, nam saepe laborum at odit labore.
                </p>
              </div>


              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </main>
    </div>
  )
}
