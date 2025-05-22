'use client';

import Layout from '../components/Layout';
import Image from 'next/image';

interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  stadium: string;
  homeScore?: number;
  awayScore?: number;
  status: 'upcoming' | 'live' | 'finished';
}

const MatchesPage = () => {
  const matches: Match[] = [
    {
      id: 1,
      homeTeam: "RMFC - 2",
      awayTeam: "BFC - Белые",
      date: "5 сентября 2025",
      time: "10:00",
      stadium: "Стадион RMFC",
      status: "upcoming"
    },
    {
      id: 2,
      homeTeam: "KarFC",
      awayTeam: "RMFC- Binakensk",
      date: "10 сентября 2025",
      time: "12:00",
      stadium: "Стадион KarFC",
      status: "upcoming"
    },
    {
      id: 3,
      homeTeam: "RangersScauts",
      awayTeam: "Astanada - 2",
      date: "12 сентября 2025",
      time: "14:00",
      stadium: "Стадион Rangers",
      status: "upcoming"
    },
    {
      id: 4,
      homeTeam: "Manchester Scauts",
      awayTeam: "Almalyk United",
      date: "15 сентября 2025",
      time: "16:00",
      stadium: "Стадион Manchester",
      status: "upcoming"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Матчи</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matches.map((match) => (
            <div key={match.id} className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <Image
                    src={`/teams/${match.homeTeam.toLowerCase().replace(' ', '-')}.png`}
                    alt={match.homeTeam}
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                  <span className="text-white font-medium">{match.homeTeam}</span>
                </div>
                
                <div className="text-center">
                  <div className="text-gray-400 text-sm">{match.date}</div>
                  <div className="text-white font-bold">{match.time}</div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-white font-medium">{match.awayTeam}</span>
                  <Image
                    src={`/teams/${match.awayTeam.toLowerCase().replace(' ', '-')}.png`}
                    alt={match.awayTeam}
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                </div>
              </div>
              
              <div className="text-center text-gray-400 text-sm">
                {match.stadium}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MatchesPage; 