const IndiaStatesDropDown = ({ selectedState, handleChange }) => {
    const [states, setStates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchStates = async () => {
        try {
          const response = await axios.get('http://api.geonames.org/childrenJSON?geonameId=1264527&username=your_username');
          setStates(response.data.geonames);
        } catch (error) {
          setError('Error fetching states');
        } finally {
          setLoading(false);
        }
      };
      
      fetchStates();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>{error}</div>;
    }
  
    return (
      <div>
        <label htmlFor="state-select">Select a state:</label>
        <select id="state-select" value={selectedState} onChange={handleChange}>
          <option value="">--Please choose a state--</option>
          {states.map((state) => (
            <option key={state.geonameId} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>
      </div>
    );
  };
  