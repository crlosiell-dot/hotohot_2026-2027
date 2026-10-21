
class UserSerializer(serializers.ModelSerializer):
    password = PasswordSerializer()

def create(self, validated_data):
    # validated_data.get
    
    c_pass = validated_data.pop("c_pass")
    password = validated_data.get("password")

    if c_pass !=password:
        ...