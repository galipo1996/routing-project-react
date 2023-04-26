import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import classes from './MainNavigation.module.css'
const MainNavigation = () => {
  return (
    <>
      <header>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                to='/'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                to='/events'
                end
              >
                event page
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                to='/events/:id'
                end
              >
                EventDetailPage
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                to='/events/new'
              >
                NewEventPage
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                to='/events/:id/edit'
              >
                EditEventPage
              </NavLink>
            </li> */}
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default MainNavigation
