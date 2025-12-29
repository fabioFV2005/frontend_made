import { Outlet} from 'react-router-dom'

export default function AuthLayout() {
  return (
    <>
        <div >
            <div >

                <div >
                    <Outlet />
                </div>
            </div>
        </div>

        <Toaster position='top-right' />
    </>
  )
}