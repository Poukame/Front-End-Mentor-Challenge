function LayoutWrapper({children}:{ children: React.ReactNode }) {
  return (
    <div className="lg:flex lg:pt-10 lg:items-center md:relative">
      {children}
    </div>
  )
}

export default LayoutWrapper
