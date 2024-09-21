
// App.js
import { useEffect, useState } from 'react';
import ReminderRow from './component/ReminderRow';
import {remindersData} from './data'
import Header from './component/header';
import DatesAction from './component/DatesAction';


const App = () => {
  const [reminders, setReminders] = useState(remindersData);
  const [language, setLanguage] = useState('en'); // en for English, ar for Arabic
  
  const handleDeleteAll = () => {
    setReminders([]); // Clear all reminders
  };
  const viewremindersData = () => {
    setReminders(remindersData)  
  }

  const handleToggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'ar' : 'en'));
  };

  const lengthRemndersData= reminders.length;

  useEffect(()=>{
    setReminders([]);
  }, [])
  return (
    <div className={`container mx-auto p-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
    
        <Header
            language={language}
            handleToggleLanguage={handleToggleLanguage}
            lengthRemndersData={lengthRemndersData}


        />
    <div className={`bg-gray-100 p-6 rounded-lg shadow-lg`}>
        {reminders.length > 0 ? (
        reminders.map(reminder => (
            <ReminderRow
            key={reminder.id}
            image={reminder.image}
            name={reminder.name}
            time={reminder.time}
              language={language} // Pass the language to the row
            />
        ))
        ) : (
        <h2 className="text-center">{language === 'en' ? 'No reminders available.' : 'لا توجد مواعيد.'}</h2>
        )}
    </div>
        
    <DatesAction
            language={language}
            handleDeleteAll={handleDeleteAll}
            viewremindersData={viewremindersData}

        />


    </div>
);
};

export default App;
