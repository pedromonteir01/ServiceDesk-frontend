import { useState } from 'react';
import axiosClient from '../config/axios';
import toast from 'react-hot-toast';
const useMutation = ({ url, method = 'POST' }) => {
  const toast = useToast();
  const [state, setState] = useState({
    isLoading: false,
    error: '',
  });

  const fn = async data => {
    setState(prev => ({
      ...prev,
      isLoading: true,
    }));
    axiosClient({ url, method, data })
      .then(() => {
        setState({ isLoading: false, error: '' });
        toast.success({
          title: 'Successfully Added Image',
          status: 'success',
          duration: 2000,
          position: 'top',
        });
      })
      .catch(error => {
        setState({ isLoading: false, error: error.message });
      });
  };

  return { mutate: fn, ...state };
};

export default useMutation;