# Kubernetes cheatsheet

This cheatsheet lists some common operations you might want to perform with Kubernetes. If you want to learn more about specific subjects, check out the official [K8s documentation](https://kubernetes.io/docs/home/).

## Viewing & finding resources

```sh
# List resources with basic output
kubectl get nodes
kubectl get pods
kubectl get services

# Describe commands with verbose output
kubectl describe nodes my-node
kubectl describe pods my-pod

# Watch for pods changes
kubectl get pods -w
```

## Creating & scaling a simple deployment

```sh
# Create a deployment
kubectl create deployment hello-app --image=nginx:latest

# Change the number of pods
kubectl scale deployment hello-app --replicas=3

# Generate a service for that deployment
kubectl expose deployment hello-app --name=hello-app-service --type=LoadBalancer --port 8080 --target-port 80

# Clean up resources
kubectl delete service hello-app-service
kubectl delete deployment hello-app
```

## Debugging resources

```sh
# Show logs for a specific pod
kubectl logs my-pod

# Show logs for a previous instantiation of a container
kubectl logs my-pod --previous

# Show logs in real-time
kubectl attach my-pod
```
