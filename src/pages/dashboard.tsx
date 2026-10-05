import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh } = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen]);

  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-gray-100">
        <CreateContentModal 
          open={modalOpen} 
          onClose={() => {
            setModalOpen(false);
          }} 
        />
        
        <div className="flex justify-end gap-4 mb-6">
          <Button 
            onClick={() => setModalOpen(true)} 
            variant="primary" 
            text="Add content" 
            startIcon={<PlusIcon />} 
          />
          <Button 
            onClick={async () => {
              try {
                const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
                  share: true
                }, {
                  headers: {
                    "Authorization": localStorage.getItem("token")
                  }
                });
                
                const shareUrl = `${window.location.origin}/share/${response.data.hash}`;
                alert(`Share link copied/created: \n${shareUrl}`);
              } catch (error) {
                console.error("Error sharing brain:", error);
                alert("Failed to generate share link.");
              }
            }} 
            variant="secondary" 
            text="Share brain" 
            startIcon={<ShareIcon />} 
          />
        </div>

        <div className="flex gap-4 flex-wrap">
          {contents.map(({ _id, type, link, title }, index) => (
            <Card 
              key={_id || index}
              type={type}
              link={link}
              title={title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}