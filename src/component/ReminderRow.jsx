

// eslint-disable-next-line react/prop-types
const ReminderRow = ({ image, name, time, language }) => {
  return (
    <div className={`flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
      <div className={`flex items-center ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
        <img className={`w-16 h-16 object-cover rounded-full ${language === 'ar' ? 'ml-4' : 'mr-4'}`} src={image} alt={name} />
        <div>
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-gray-600">{language === 'en' ? 'Time' : 'الوقت'}: {time}</p>
        </div>
      </div>
      <div className={`flex ${language === 'ar' ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          {language === 'en' ? 'Edit' : 'تعديل'}
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
          {language === 'en' ? 'Delete' : 'حذف'}
        </button>
      </div>
    </div>
  );
};

export default ReminderRow;
