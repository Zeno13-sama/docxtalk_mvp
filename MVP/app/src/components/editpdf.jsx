import React, { useRef, useEffect, useState } from 'react';
import WebViewer from '@pdftron/webviewer';
import { usePdfContext } from '../contexts/PdfContext';
import '../index.css';
import axios from '../axios';
import { useToast } from '../contexts/ToastContext';

function Editpdf({ onLoad, documentData, refresh }) {
  const viewerDiv = useRef(null);
  const { pdfPath, loading } = usePdfContext();
  const [instance, setInstance] = useState(null);
  const showToast = useToast();

  useEffect(() => {
    console.log('Init WebViewer called');

    if (!viewerDiv.current) {
      console.warn("WebViewer n'a pas trouvé son élément DOM.");
      return;
    }

    // Empêcher la création de plusieurs instances
    if (instance) {
      console.warn('WebViewer est déjà initialisé, on annule la réinitialisation.');
      return;
    }

    let newInstance = null;

    const initWebViewer = async () => {
      try {
        console.log('Creating a new WebViewer instance...');
        newInstance = await WebViewer(
          {
            path: '/app/lib',
            licenseKey: 'demo:1727982776616:7e0d46050300000000069945db1215cb9199db6bd71565c5d7f70dc82f',
            initialDoc: '',
          },
          viewerDiv.current
        );

        setInstance(newInstance);

        newInstance.UI.enableFeatures([newInstance.UI.Feature.ContentEdit]);

        newInstance.UI.setHeaderItems(header => {
          header.push({
            type: 'actionButton',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7zEC125CqFW2thjHD9JbTzksfADo_lPXFQ&s',
            title: 'Save the generated document',
            onClick: async () => {
              try {
                const doc = newInstance.Core.documentViewer.getDocument();
                const xfdfString = await newInstance.Core.annotationManager.exportAnnotations();
                const data = await doc.getFileData({
                  xfdfString,
                  downloadType: 'pdf',
                });

                showToast('success', "Document enregistré. Vous pouvez maintenant l'envoyer.");

                const arr = new Uint8Array(data);
                const blob = new Blob([arr], { type: 'application/pdf' });
                const formData = new FormData();
                formData.append('file', blob, 'downloaded.pdf');

                const response = await axios.post('/upload', formData, {
                  headers: { 'Content-Type': 'multipart/form-data' },
                });
                console.log('Fichier envoyé avec succès:', response.data);
              } catch (error) {
                console.error("Erreur lors de l'envoi du fichier:", error);
              }
            },
          });
        });

        if (onLoad) {
          onLoad();
        }
      } catch (err) {
        console.error('Erreur lors de l\'initialisation de WebViewer', err);
      }
    };

    initWebViewer();

    return () => {
      if (newInstance) {
        console.log('Nettoyage de WebViewer');
        newInstance.UI.dispose();
        setInstance(null);
      }
    };
  }, []); // 🔥 Exécuter une seule fois au montage

  useEffect(() => {
    if (instance && pdfPath) {
      console.log('Chargement du document :', pdfPath);
      instance.Core.documentViewer.loadDocument(pdfPath);
    }
  }, [pdfPath, instance]);

  return (
    <div className="relative w-full h-screen">
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
          <div className="loaderx">Loading...</div>
        </div>
      ) : (
        <div className="webviewer" ref={viewerDiv} style={{ width: '100%', height: '100vh' }}></div>
      )}
    </div>
  );
}

export default Editpdf;


