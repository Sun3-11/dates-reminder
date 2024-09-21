

 // eslint-disable-next-line react/prop-types
 const Header = ({lengthRemndersData, language,handleToggleLanguage}) => {

    return( 
        <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold"> {lengthRemndersData} {language === 'en' ? 'Upcoming Dates' : 'المواعيد القادمة'}</h1>
        <button 
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        onClick={handleToggleLanguage}
        >
        {language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
        </button>
    </div>
    
    )
}

export default Header;
