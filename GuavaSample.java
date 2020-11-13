import org.codingpedia.example;

import com.google.common.cache.CacheBuilder;
import com.google.common.cache.CacheLoader;
import com.google.common.cache.LoadingCache;

import javax.inject.Inject;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.core.MediaType;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;


public class GuavaCacheDemoService {

    static LoadingCache<String, ToDo> toDosCache = CacheBuilder.newBuilder()
            .maximumSize(1000)
            .expireAfterAccess(60, TimeUnit.SECONDS)
            .build(
                    new CacheLoader<String, ToDo>() {
                        public ToDo load(String id) {
                               final ToDo toDo = restApiClient.getToDo(id);    
                               return toDo;
                        }
                    }
            );
    
    @Inject
    RestApiClient restApiClient;
    
    ToDo getToDo(String toDoId) throws ExecutionException {
        final ToDO toDo = toDosCache.get(toDoId);
        return toDo; 
    }
    
}
