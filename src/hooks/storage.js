import { useState, useEffect } from 'react';


function useStorage() {
  const studentName = ["Huyen","Hoa","Hung","Long"]
  return [studentName ];
}

export default useStorage;
