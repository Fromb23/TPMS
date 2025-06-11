import { Header, Sidebar, Footer } from './';

export const Layout = ({ children, title, role = 'student', breadcrumbs = [] }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar role={role} />
      <div className="md:pl-64 flex flex-col">
        <Header title={title} />
        <main className="flex-1 p-6">
          {breadcrumbs.length > 0 && <Breadcrumb items={breadcrumbs} />}
          <div className="mt-6">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};