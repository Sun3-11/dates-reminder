
// eslint-disable-next-line react/prop-types
const DatesAction = ({ language, handleDeleteAll, viewremindersData}) => {
    return(
        <div className="flex justify-between mt-6">
        <button 
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={viewremindersData} // Reset the reminders
        >
        {language === 'en' ? 'Show Reminders' : 'عرض المواعيد'}
        </button>
        <button 
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        onClick={handleDeleteAll}
        >
        {language === 'en' ? 'Delete All' : 'مسح الكل'}
        </button>
    </div>
    )
}
export default DatesAction;