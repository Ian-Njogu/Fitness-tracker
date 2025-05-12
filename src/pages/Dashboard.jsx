
import { useEffect, useState } from 'react';
import { auth, db } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { collection, addDoc, query, where, getDocs, Timestamp } from 'firebase/firestore';
import StepChart from '../components/StepChart';

export default function Dashboard() {
  const [steps, setSteps] = useState('');
  const [data, setData] = useState([]);

  const saveSteps = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) return;
    await addDoc(collection(db, 'steps'), {
      uid: user.uid,
      steps: parseInt(steps),
      date: Timestamp.now(),
    });
    setSteps('');
    fetchSteps();
  };

  const fetchSteps = async () => {
    const user = auth.currentUser;
    if (!user) return;
    const q = query(collection(db, 'steps'), where('uid', '==', user.uid));
    const querySnapshot = await getDocs(q);
    const fetched = querySnapshot.docs.map(doc => {
      const d = doc.data();
      return {
        date: d.date.toDate().toLocaleDateString(),
        steps: d.steps,
      };
    });
    setData(fetched);
  };

  useEffect(() => {
    fetchSteps();
  }, []);

  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          onClick={() => signOut(auth)}
          className="text-sm text-red-500 border px-2 py-1 rounded"
        >
          Sign Out
        </button>
      </div>

      <form onSubmit={saveSteps} className="flex items-center space-x-2 mb-6">
        <input
          type="number"
          placeholder="Steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="p-2 border rounded w-full"
          required
        />
        <button className="p-2 bg-blue-500 text-white rounded">Add</button>
      </form>

      <StepChart data={data} />
    </div>
  );
}
